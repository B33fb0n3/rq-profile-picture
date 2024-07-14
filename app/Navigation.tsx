'use client'

import Image from "next/image";
import {useQuery} from "@tanstack/react-query";
import {getProfilePicture} from "@/app/actions";
import LoadingAnimation from "@/app/LoadingAnimation";

export default function Navigation() {
    const {data, isFetching} = useQuery({
        queryKey: [`profilePicture`],
        queryFn: () => getProfilePicture(),
    });

    return <div className={"w-full border-2 border-black border-dashed flex justify-between"}>
        <p>Navigation Component (Layout)</p>
        <div className={"relative h-10 w-10"}>
            {isFetching
                ? <LoadingAnimation />
                : <Image src={!data ? "/default-profile.png" : data} alt={""} fill className={"object-contain"}/>
            }
        </div>
    </div>
}