export default function Loading() {
  return (
    <ul className="py-4 divide-y divide-gray-200 bg-white dark:bg-slate-800 dark:divide-slate-700 shadow-md rounded-b-md">
      {new Array(3).fill(null).map((_, i) => (
        <li
          key={i}
          className="mx-auto py-4 px-8 w-full animate-pulse flex space-x-4"
        >
          <div className="rounded-lg bg-gray-300 dark:bg-slate-700 h-40 w-40" />
          <div className="w-full flex-1 space-y-4 py-1 ">
            <div className="h-10 bg-gray-300 dark:bg-slate-700 rounded w-full" />
            <div className="space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-4/5"/>
                <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-4/5"/>
                <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-4/5"/>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
