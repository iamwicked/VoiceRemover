import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Icon({name, route}:{name:string, route: string}){
  const router = useRouter()
    return (
       <div className="flex flex-wrap justify-center items-center p-[10px] hover:rounded-[20px] hover:bg-red-300 my-[10px]"
       onClick={()=>router.push(route)}>
            <Image
              src="/icons.svg"
              alt="Music Logo"
              className="dark:invert w-[100%]"
              width={100}
              height={100}
              priority
            />
        {name}
       </div>
    )
}