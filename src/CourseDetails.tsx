import { useLocation } from "react-router-dom";
type Course = {
  course: string;
  description: string;
  img: string;
};
export default function CourseDetails() {
  const location = useLocation().state as Course[];
  const mappedState = location.map((ele, key) => (
    <div key={key} className="flex flex-wrap justify-center gap-6 md:gap-20 md:pl-40">
      <img src={ele.img} alt="" className=" w-[80%] md:w-[40%] " />
      <div className="flex flex-col md:-10">
        <div className="text-4xl font-bold">{ele.course}</div>
        <div>
            <div className="font-bold text-xl py-4">Description :</div>
            <div>
                {ele.description}
            </div>
        </div>
      </div>
    </div>
  ));
  return <div className="h-screen pt-10">{mappedState}</div>;
}
