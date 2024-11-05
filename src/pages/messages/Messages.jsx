import Image from "../../assets/images/img1.png";
import "./message.css";
import { MdArrowDropDown, MdArrowForward, MdEditNote, MdEmojiEmotions, MdFavorite, MdInfo, MdMic, MdPhone, MdPhotoCamera, MdVideoCall } from 'react-icons/md';
 

const Messages = () => {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];
  


  return (
    <section className='messageSection w-full h-screen   m-0 p-0'>
      <div className="messageSectionWrapper h-screen w-full flex  ">
        <div className="messageLeftPart w-[25rem]  h-auto ">
          <div className="messageLeftPartWrapper w-full">
            <div className="messageLeftPartTop">
              <div className="messageRightPartTop flex items-center w-full h-auto   justify-between pt-[30px] pb-[20px] px-5 border-y-[1px] border-b-gray-400">
                <div className="messageRightPartTopLeft flex items-center sm:hidden md:flex">
                  <div className="box flex items-center cursor-pointer">
                    <p className="username text-lg font-bold">Javedshekhie2323</p>
                    <div className="icon"><MdArrowDropDown size={30} /></div>
                  </div>
                </div>
                <div className="messageRightPartTopRight">
                  <div className="icon cursor-pointer">
                    <MdEditNote size={28} />
                  </div>
                </div>
              </div>



            </div>

            <div className="messageLeftPartBottom h-auto overflow-y-scroll w-full  ">

              <div className="activeUsersConainer  w-full sm:w-auto md:w-[25rem] scroll-smooth overflow-auto px-2  sm:hidden md:block" style={{ scrollbarWidth: "thin" }}>
                <ul className='storiesBox flex flex-row w-full p-2 w-full overflow-scroll relative'>
                  {arr.map((l) => (
                    <>
                      <li key={l} className='h-full w-[6rem] flex flex-col items-center justify-center  p-1 cursor-pointer'>
                        <div className="imageBox  w-[5rem] h-[5rem] p-[2px] flex items-center justify-center rounded-full">
                          <img src={Image} alt="" className='w-full h-full object-cover rounded-full' />
                        </div>
                        <span className='text-xs '>Name</span>
                      </li>
                    </>
                  ))}

                  <div className="skipButton absolute right-[8%] bottom-[-40%]  z-20 h-full">
                    <div className="icon fixed p-1 bg-white text-black rounded-full cursor-pointer">
                      <MdArrowForward />
                    </div>
                  </div>
                </ul>

              </div>



              <div className="mid flex items-center  justify-between my-1 px-3 py-2 sm:hidden md:flex">
                <div className="box">Messages</div>
                <div className="box text-blue-600 cursor-pointer">Requests <span> (2) </span></div>
              </div>


              <div className="boxContainer   w-full h-screen ">
                {
                  arr.map(p => (
                    <>
                      <div key={p} className="box hover:bg-gray-100 cursor-pointer flex items-center p-3">
                        <div className="profilePicture h-full w-[5rem]  ">
                          <div className="imageBox w-[4rem]    h-[4rem]     p-[2px]   flex items-center justify-center  rounded-full cursor-pointer">
                            <img src={Image} alt="" className='w-full h-full object-cover rounded-full' />
                          </div>
                        </div>

                        <div className="lastMessage flex flex-col sm:hidden md:block">
                          <div className="username">Ranjeet Yadav</div>
                          <p className="text-sm"> Active 2 hours age</p>
                        </div>

                      </div>
                    </>
                  ))
                }
              </div>


            </div>
          </div>


        </div>







        <div className="messageRightPart flex-[2]   h-full w-full">
          <div className="messageRightPartTop flex items-center w-full h-[5rem] border-[1px] border-[#ccc]  justify-between px-4 py-2 border-b-2 border-b-gray-400">
            <div className="  flex items-center">
              <div className="  h-full w-[5rem]  ">
                <div className="imageBox w-[4rem]    h-[4rem]     p-[2px]   flex items-center justify-center  rounded-full cursor-pointer">
                  <img src={Image} alt="" className='w-full h-full object-cover rounded-full' />
                </div>
              </div>

              <p className='username font-semibold'>Javed Shekh</p>
            </div>
            <div className="messageRightPartTopRight">
              <div className="icons flex items-center space-x-3">
                <div className="icon cursor-pointer">
                  <MdPhone size={28} />
                </div>
                <div className="icon cursor-pointer"><MdVideoCall size={30} /></div>
                <div className="icon cursor-pointer"><MdInfo size={30} /></div>
              </div>
            </div>
          </div>


          <div className="messageRightPartBottom relative  border-r-2    left-0 top-0 w-full   flex flex-col" style={{height:"calc(100% - 5rem)"}}>

            <div className="chatting h-[90%]  bg-pink-600 w-full overflow-y-scroll p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique eveniet qui iusto aliquam, molestiae tempore iure tempora. Esse necessitatibus molestias, quibusdam doloribus veritatis quas ullam officiis, aut ut omnis earum laudantium quia hic quasi! Ullam, voluptate tempore eaque amet iste necessitatibus sed, aut quidem porro accusamus sint animi ratione alias harum? Consectetur, dicta quas, eligendi, nisi laudantium deserunt a sed qui recusandae eos cum eveniet inventore amet fugiat! Recusandae, necessitatibus deleniti, eveniet nesciunt provident adipisci sapiente laboriosam dolorem optio eligendi suscipit dicta aliquid cum corrupti! Animi maxime nostrum harum fugit et blanditiis illo quasi. In eius eaque nobis vel illo repellendus, expedita, minima velit consequatur libero sunt laboriosam, sint ullam dicta eligendi dignissimos rerum? Blanditiis, temporibus. Magnam nulla eum inventore voluptatum fugit optio veniam possimus? Cupiditate ducimus consequatur beatae ea unde nostrum architecto quae, exercitationem molestiae aliquam delectus error doloremque soluta deserunt, minus facilis voluptas quaerat recusandae qui omnis? Praesentium quidem eveniet nulla sit quisquam commodi temporibus architecto, aperiam perspiciatis non optio expedita deserunt dolores porro asperiores reiciendis repellat natus. Ipsum ad nam minus hic, maxime veniam vitae mollitia accusantium soluta totam debitis odio, provident esse. Animi illum blanditiis impedit neque magni, error facilis libero atque, eos repudiandae distinctio harum rem? Et doloremque perspiciatis omnis pariatur, vitae qui temporibus doloribus sint! Nam optio soluta voluptatum. Dolor accusantium nobis perferendis? Ipsa hic cupiditate officia alias fuga ad a nisi, qui neque velit sapiente ratione. Consectetur deleniti, distinctio eius quod quidem placeat natus! Eos, quae dolore a non sequi molestiae ipsam quisquam facilis blanditiis optio itaque asperiores cupiditate? Hic voluptatum debitis, voluptatem sit dolorem ducimus modi quia natus quibusdam! Repudiandae, impedit magni! Laborum recusandae et aspernatur aliquam cum. Nesciunt sed, aliquid corrupti aliquam consequatur incidunt officia ut impedit recusandae labore animi ratione molestias voluptatibus perferendis veniam nemo. Sequi voluptatem suscipit aspernatur, architecto eum magni voluptatum. Exercitationem nesciunt non incidunt ab velit, qui expedita dolor eos commodi sunt aliquam fuga modi molestias repellendus culpa quam adipisci quis cupiditate. Ducimus corporis, cumque quae aliquam, quisquam a quam consequatur laborum ad voluptatem modi hic explicabo qui iste atque aut distinctio sunt rerum id magni assumenda ipsum non? Maxime ea repellendus debitis, maiores facere nihil quibusdam beatae molestias possimus dignissimos voluptatibus consectetur, necessitatibus error saepe aliquid veniam. Perferendis placeat officiis distinctio! Voluptatum placeat molestias a vitae facilis maiores, quis ratione odio quae explicabo dolores sequi quia iusto obcaecati corrupti, odit similique? Veniam distinctio accusamus eius perspiciatis nam aliquid eaque inventore sequi tenetur vel, iure, magnam obcaecati magni possimus tempore ut quam ducimus pariatur. Magni cumque velit fuga id animi eveniet repellat assumenda fugit impedit, adipisci, amet minima voluptas dignissimos quas eum illo quibusdam quod maxime ex vel! Aliquid expedita incidunt numquam iure ea deserunt sit rerum quae explicabo debitis officia praesentium et velit dolore eius porro cumque suscipit voluptas provident ipsam voluptatum facilis, recusandae hic. Maxime alias nemo quidem dolores commodi, illo tenetur vitae deserunt praesentium quis consequatur fugit amet dignissimos eos rem explicabo dolorum molestiae autem mollitia nobis quasi sapiente harum optio atque! Quia, aliquid, architecto quod, ipsum sequi repudiandae aliquam placeat eos tenetur eum pariatur facere. Quo corporis a vero saepe tempora rem veritatis quasi adipisci. Distinctio voluptates dignissimos cum error est at natus voluptatem nostrum aut incidunt rerum voluptatibus, suscipit unde dolorum doloribus expedita optio, earum impedit labore facilis? Repellat accusantium, beatae quaerat illo hic tempore sit vel nam suscipit rerum provident mollitia. Unde et quasi molestiae asperiores cum obcaecati similique aspernatur quae, a consequuntur deserunt facilis, eaque exercitationem reprehenderit expedita quisquam nulla illum. Officiis animi odit voluptates nam et quae nulla illo deserunt atque maxime nobis, soluta facere aut ratione fugit consectetur repudiandae est eligendi molestiae dicta quasi tenetur iste voluptatum nostrum! Officia ratione explicabo reprehenderit ut sequi? Libero earum sunt est rem eius laboriosam autem voluptatem deleniti laudantium. Maiores ea laboriosam ut! Fugiat voluptates quidem minima unde quaerat architecto optio esse error facere aliquid quo natus sed consequatur expedita corrupti nam ducimus, corporis totam omnis sapiente accusamus reiciendis. Voluptates mollitia adipisci esse nisi praesentium quos ad nulla! Totam in quaerat qui praesentium sit iure cupiditate provident ut, quod illo non, incidunt facere excepturi. Unde et eveniet quasi, quas possimus veritatis dignissimos quam magnam amet sit non illo alias tenetur labore, rem iure sed accusantium molestiae perferendis suscipit quaerat fugiat. Laudantium excepturi quod, sequi ducimus molestiae natus dolore unde sunt, repudiandae quos iure. Asperiores praesentium animi fugiat dolorem vitae, quisquam eum temporibus iure delectus reiciendis hic saepe sit facilis perferendis, fuga deleniti, libero earum quod dicta rem quae eveniet repudiandae voluptatem? Modi voluptates voluptas odit, dolorum cupiditate necessitatibus harum aliquam et animi perspiciatis quos ab laborum recusandae dolores dolorem, eligendi quidem pariatur illo ullam ut a dolore, voluptatibus consequuntur? Delectus nulla quod vel ut dolor, architecto itaque veniam rerum nobis ratione eveniet! Commodi ipsam nisi ipsa asperiores sit perspiciatis nesciunt accusantium veniam expedita modi blanditiis, est dolorem ab eaque, perferendis eveniet architecto eius similique vero excepturi officiis exercitationem! Inventore obcaecati dignissimos perferendis ab unde tempore. Quaerat similique a voluptas cum alias pariatur culpa expedita, quasi eius molestias quas aspernatur quae ad laboriosam saepe rerum in sunt laudantium cupiditate? Enim, dolor quidem dignissimos sed illum consequuntur, aliquid natus dolorem vero quaerat animi! Corporis magnam inventore rerum, sunt maxime dolor? Impedit, quae sunt similique saepe atque dicta facere nemo veniam possimus odit, tenetur ut autem deleniti explicabo nulla optio maiores sapiente ullam quod quibusdam. Aperiam blanditiis dignissimos sequi non voluptatibus, quibusdam voluptates tempora amet magni laboriosam consequuntur nostrum commodi placeat unde eius dolorum deserunt, cum fugiat recusandae! Laboriosam animi, totam sed enim laborum autem natus sunt dolore, voluptate esse eligendi ad pariatur consequuntur! Rem esse eligendi fugiat nam quos. Vero obcaecati sint quasi! Eligendi aspernatur doloremque voluptates quos voluptatem odio, delectus nemo pariatur consectetur quibusdam recusandae reiciendis asperiores vel officia assumenda nam sed consequatur ducimus eos. Itaque veniam magnam veritatis? Assumenda iste sed hic, sapiente quia perspiciatis illum dolorum cum itaque quo enim nostrum sequi magnam reiciendis facere error soluta asperiores deserunt! Quasi, ea at minus explicabo veniam illo sint eum voluptates earum!
            </div>


            <div className="inputContainer  px-4 items-center m-auto flex w-full justify-center" >
              <div className="inputWrapper flex items-center justify-between rounded-full w-full py-1.5 px-3 border-2 border-black">
                <div className="inputWrapperLeft flex items-center space-x-2 w-[80%]">
                  <div className="emoji cursor-pointer ">
                    <MdEmojiEmotions size={25} className='' />
                  </div>
                  <div className="inputBox w-full h-full">
                    <input type="text" className='w-full bg-transparent placeholder:text-gray-400 text-[17px] focus:border-0 focus:outline-0' multiple placeholder='Message....' />
                  </div>
                </div>
                <div className="inputWrapperRight">
                  <div className="icons flex items-center space-x-3">
                    <div className="icon cursor-pointer"><MdMic size={25} /></div>
                    <div className="icon cursor-pointer"><MdPhotoCamera size={25} /></div>
                    <div className="icon cursor-pointer"><MdFavorite size={25} /></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Messages