"use client";
import { Loader2, SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useRef, useState, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {

    const searchParams = useSearchParams()
    const defaultQuery = searchParams.get("query") || ""
    const inputRef = useRef<HTMLInputElement>(null)
    const [isSearching, startTransition] = useTransition()
    const router = useRouter()
    const [query, setQuery] = useState<string>(defaultQuery)
    const search = () => {
        startTransition(() => {
            router.push(`/search?query=${query}`)
        })
    }

    return (
        <div className="relative w-full h-14 flex flex-col bg-white dark:bg-slate-800 rounded-t-md">
            <div className="relative h-14 z-10 rounded-md">
                <Input disabled={isSearching} value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        search()
                    }
                    if(e.key === "Escape"){
                        inputRef?.current?.blur()
                    }
                }} ref={inputRef} className="absolute inset-0 h-full rounded-md dark:bg-slate-800" placeholder="Search" />
                <Button disabled={isSearching} onClick={search} className="sm absolute right-0 h-full inset-y-0 rounded-l-none bg-white dark:bg-slate-800">
                    {isSearching ? <Loader2 className="w-6 h-6 animate-spin text-zinc-500 dark:text-slate-300" /> : <SearchIcon className="w-6 h-6 text-gray-500 dark:text-slate-300" />}
                </Button>
            </div>
        </div>
    )
}
export default SearchBar