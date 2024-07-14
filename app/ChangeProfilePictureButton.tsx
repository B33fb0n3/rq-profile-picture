'use client'

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {changeProfilePicture, getProfilePicture} from "@/app/actions";
import LoadingAnimation from "@/app/LoadingAnimation";

export default function ChangeProfilePictureButton() {
    const queryClient = useQueryClient();
    const {data, isFetching} = useQuery({
        queryKey: [`profilePicture`],
        queryFn: () => getProfilePicture(),
    });

    const isDefaultImage = !data;

    const toggle = async () => {
        await changeProfilePicture(!isDefaultImage);
        await queryClient.invalidateQueries({queryKey: [`profilePicture`]});
    }

    return <div className={"flex gap-x-8 h-full"}>
        <div className={"relative h-24 w-24"}>
            {isFetching
                ? <LoadingAnimation/>
                :
                <Image src={isDefaultImage ? "/default-profile.png" : data} alt={""} fill className={"object-contain"}/>
            }
        </div>
        <Button onClick={toggle} size={"sm"} disabled={isFetching}>Change to {isFetching ? '...' : (isDefaultImage ? "New" : "Default")}</Button>
    </div>
}