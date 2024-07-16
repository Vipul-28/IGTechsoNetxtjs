import { userData } from "@/utils/data"

const UserCard = () => {
  return (
    <>
    {
        userData.map(({name,position,des,topic1,topic2})=>{
            return (
             <section className="mb-2 ml-10 p-4  border rounded-lg w-[350px] bg-[#111827] text-white">
            <div className="mx-auto">
                <div className="card md:flex max-w-lg">
                    <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
                        <img className="object-cover rounded-full" src="https://tailwindflex.com/public/images/user.png" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <p className="font-bold">{position}</p>
                        <h3 className="text-xl heading">{name}</h3>
                        <p className="mt-2 mb-3">{des}</p>
                        <div className="grid gird-col-1 gap-2">
                            <span className="bg-blue-600 border px-3 py-1.5 rounded-lg text-sm">{topic1}</span> 
                            <span className="bg-blue-600 border px-3 py-1.5 rounded-lg text-sm">{topic2}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            )
        })
    }
    </>
  )
}

export default UserCard