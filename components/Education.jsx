import Link from "next/link";

const Education = () => {

    const educations = [
        {
            "institution-name": "NMAM Institute of Technology",
            "year": "2020-present",
            "course": "Computer Science & Engineering",
            "grade": "CGPA: 9.08",
            "link": "https://nmamit.nitte.edu.in/"
        },
        {
            "institution-name": "Boscoss PU College",
            "year": "2018-2020",
            "course": "Higher Secondary Education (PCMC)",
            "grade": "Aggregate Percentage: 95.83%",
            "link": "https://www.boscoss.com/"
        },
        {
            "institution-name": "Canara High School",
            "year": "2013-2018",
            "course": "Secondary Education",
            "grade": "Aggregate Percentage: 95.68%",
            "link": "https://canaracbse.com/"
        }
    ]

    const renderEducation = () => {
        return educations.map((education, index) => (
            <div key={index} className="flex-col text-[#b5b8be] py-7 pl-5 border-l-2 border-l-[#b5b8be] hover:border-l-[#FFAE00] hover:bg-[#191919] group">
                <h1 className="font-bold text-2xl group-hover:text-white">{education["institution-name"]}&nbsp;
                    <Link href={education.link} className="text-white" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                    </Link>
                </h1>
                <p className="font-semibold mb-3">{education.year}</p>
                <p>{education.course}</p>
                <p>{education.grade}</p>
            </div>
        ))
    }

    return (
        <div className="px-16 my-16">
            <h1 className='font-semibold border-b-4 border-[#FFAE00] w-fit mb-4'>Education</h1>

            <div className="my-10">
                {renderEducation()}
            </div>
        </div>
    );
}

export default Education