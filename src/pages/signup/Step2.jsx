import React from 'react'
import { Link } from 'react-router-dom';


const Step2 = ({nextStep,prevStep,hanldeForm,formData}) => {
    return (
        <div className="flex w-full items-center flex-col mt-2 h-full">
            <div className='border-2 p-6 max-w-[23rem]'>
                <h1 className="text-3xl text-center">
                    Instagram
                </h1>
                <p className='font-semibold my-2 text-center text-slate-600'>Add your date of birth</p>

                <p className='  text-center text-slate-600 text-sm'>This won't be part of your public profile.</p>
                <p className='text-center text-blue-300 text-[0.9rem]'>Why do I need to provide my date of birth?</p>


                <div className="drop_down my-2 flex items-center justify-between w-full">
                    <select name="drop1" id="" className='drop1 border-2 p-1 rounded-md'>
                        <option value="January">January</option>
                        <option value="" selected>Month</option>
                        <option value="Febuary">Febuary</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>

                    <select name="drop2" id="" className='drop2 border-2 p-1 rounded-md '>
                        <option selected>Date</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>



                    <select name="drop3" id="" className='drop3 border-2 p-1 rounded-md'>
                        <option selected>Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>



                    </select>
                </div>


                <p className='text-xs py-1 text-center'>You need to enter the date you were born on</p>

                <p className='text-sm text-center py-2'>Use your own date of birth, even if his this account is for  a business, pet or something else</p>












                <button className='text-center w-full bg-blue-400 my-2 rounded-md text-white p-1 hover:bg-blue-600'
                onClick={nextStep}
                >
                    <Link  >Next</Link>
                </button>

                <button className='text-center w-full  my-2   text-blue-400 p-1 hover:text-blue-600'
                onClick={prevStep}
                >
                    <Link>Go Back</Link>
                </button>

            </div>

            <div className='have_account border-2 p-6 w-[23rem] text-center my-2'>
                <p className=''>Have an account? <a href="" className='text-blue-700 font-sm'>Log in</a></p>
            </div>
        </div>
    )
}

export default Step2;