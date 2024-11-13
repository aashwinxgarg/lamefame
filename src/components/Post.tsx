import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/17392834/pexels-photo-17392834/free-photo-of-cloud-over-sunlit-mountain.jpeg?auto=compress?&cs=tinysrgb&w=800&lazy=load" alt="" height={40} width={40} className="w-10 h-10 rounded-full" />
                    <span className="font-medium">Jack McBride</span>
                </div>
                <Image src="/more.png" alt="" height={16} width={16} />
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src="https://images.pexels.com/photos/24729012/pexels-photo-24729012/free-photo-of-spatter-cone-during-a-live-volcanic-eruption-in-iceland.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla incidunt magni veritatis totam laudantium jure optio quis necessitatibus obcaecati. Repudiandae maxime fuga ut praesentium ea deleniti dolorn tacere asperiores.</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/like.png" alt="" height={16} width={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/comment.png" alt="" height={16} width={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span></span>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image src="/share.png" alt="" height={16} width={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Shares</span></span>
                    </div>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Post