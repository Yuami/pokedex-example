export default function Star({active}) {
    const starStyle = active ? 'fill-amber-400 stroke-1 stroke-amber-400' : 'stroke-gray-600'
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${starStyle}`} fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
    )
}