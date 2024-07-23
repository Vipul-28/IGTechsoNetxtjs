import { userData } from "@/utils/data"

const UserCard = () => {
    // const session =await getServerSession();
    let val=100
  return (
<>
    {
      userData.map(({name,position,des,topic1,topic2},id)=>{
        (id%2==0)?val+=400:val-=400
          return (
           <section className={`mb-2 ml-[${val}px] p-4  border rounded-lg w-[350px] bg-[#111827] text-white`}>
            
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

//     <div className="container mx-auto p-4">
//     <div className="grid grid-cols-1 md:grid-cols-1">
//         {
//             userData.map(({ name, position, des, topic1, topic2,image },id) => {
//                (id%2==0)?val-=350:val+=350;  
//               return (
//                     <div className={`relative flex flex-col md:flex-row  md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white m-[10px] w-[10000px] ml-[${val}px]`}>
//                         <div className="w-full bg-white flex flex-col p-3">
//                             <h3 className="font-black text-gray-800 md:text-3xl text-xl">
//                                 {name}
//                             </h3>
//                             <p className=" text-gray-500 text-base">
//                                 {des}
//                             </p>
//                             <p className=" text-gray-500 text-base">
//                                 {position}
//                             </p>
//                             <p className="text-xl font-black text-gray-800">
//                                 {topic1}
//                                 <span className="font-normal text-gray-600 text-base">/{topic2}</span>
//                             </p>
//                         </div>
//                     </div>
//                 );
//             })
//         }
//     </div>
// </div>

  )
}

export default UserCard