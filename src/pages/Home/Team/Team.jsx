import { useEffect, useState } from "react";
import OurTeam from "./ourTeam";
const Team = () => {
    const [team, setTeam] = useState([])

    useEffect(() => {
        fetch("Team.json")
        .then(res => res.json())
        .then(data => setTeam(data))
    },[])

    return (
        <div className="text-center mt-4 mb-6">
            <h1 className="text-xl text-[#FF3811]">Team</h1>
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="text-[#bfbbbb] my-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                   team.map(team => <OurTeam key={team.id} team={team}></OurTeam>)
                }
            </div>
        </div>
    );
};

export default Team;