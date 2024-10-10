import { React } from "react";
import { useSelector } from "react-redux"; 
import "./Dashboard.css";
import Card from "../Card/Card";

import add from "../../assets/add.svg";
import dot_menu from "../../assets/3_dot_menu.svg";
import Backlog from "../../assets/Backlog.svg";
import To_do from "../../assets/To_do.svg";
import in_progress from "../../assets/in_progress.svg";
import Done from "../../assets/Done.svg";
import Cancelled from "../../assets/Cancelled.svg";
import No_priority from "../../assets/No_priority.svg";
import Img_Low_Priority from "../../assets/Img_Low_Priority.svg"
import Img_Medium_Priority from "../../assets/Img_Medium_Priority.svg"
import Img_High_Priority from "../../assets/Img_High_Priority.svg"
import Urgent_Priority_colour from "../../assets/Urgent_Priority_colour.svg";

const Dashboard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  console.log("stat", isStatus, "prio", isPriority);
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer">
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 18.7;
          return (
            <div
              key={index}
              className="dashCardContainer"
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <div className="dashCardHeading flex-sb">
                <div className="leftView" style={{ marginLeft:"10px" }}>
                  {user ? (
                    <div
                      className="imageContainer relative"
                      style={{ width: "10px", height: "15px", display: "inline-block", }}
                    >
                    </div>)
                    :
                    isStatus ? (
                      <div
                        className="cardTitle"
                        style={{ width: "15px", height: "15px", display: "inline-block", fontWeight: 200, }}
                      >
                        {element[index].title === "Backlog" ? (
                          <img src={Backlog} alt="logo" />
                        )
                          : element[index].title === "Todo" ? (
                            <img src={To_do} alt="logo" />
                          )
                            : element[index].title === "In progress" ? (
                              <img src={in_progress} alt="logo" />
                            )
                              : element[index].title === "Done" ? (
                                <img src={Done} alt="logo" />
                              )
                                : (
                                  <img src={Cancelled} alt="logo" />
                                )}
                      </div>
                    )
                      :
                      isPriority ? (
                        <div 
                          style={{
                            display: "inline-block",
                          }}>
                          {
                            element[index].title === "Low" ? (
                              <img src={Img_Low_Priority} alt="logo" />
                            ) :
                              element[index].title === "Medium" ? (
                                <img src={Img_Medium_Priority} alt="logo" />
                              ) :
                                element[index].title === "High" ? (
                                  <img src={Img_High_Priority} alt="logo" />
                                ) :
                                  element[index].title === "Urgent" ? (
                                    <img src={Urgent_Priority_colour} alt="logo" />
                                  ) :
                                    (
                                      <img src={No_priority} alt="logo" />

                                    )}
                        </div>)
                        :
                        (<img src={No_priority} alt="logo" />
                          //still to change
                        )}{" "}
                  <span>
                    {element[index]?.title} {element[index].value?.length}
                  </span>
                </div>
                <div className="rightView" style={{ marginRight: "10px" }}>
                  {/* span check */}
                  <img src={add} alt="logo" />
                  <img src={dot_menu} alt="logo" />
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {element[index]?.value?.map((element, ind) => {
                  return (
                    <Card
                      id={element.id}
                      title={element.title}
                      tag={element.tag}
                      status={element.status}
                      priority={element.priority}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStatus && (
          <>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "90px", wordSpacing: "4px" }}>
                <div
                  className="cardTitle"
                  style={{
                    width: "13px",
                    height: "13px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                  <img src={Done} alt="logo" />
                </div>{" "}
                <span style={{ width: "15px", height: "15px", fontWeight: "200" }}>Done</span> <span style={{ fontSize: "15px" }}>0</span>
              </div>
              <div className="rightView">
                <img src={add} alt="logo" />
                <img src={dot_menu} alt="logo" />
              </div>
            </div>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "60px", wordSpacing: "4px" }}>
                <div
                  className="cardTitle"
                  style={{
                    width: "9px",
                    height: "9px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                  <img src={Cancelled} alt="logo" />
                </div>{" "}
                <span  style={{ width: "15px", height: "15px",fontWeight: "200"}}>Cancelled</span> <span style={{ fontSize: "15px"}}>0</span>
              </div>
              <div className="rightView">
                <img src={add} alt="logo" />
                <img src={dot_menu} alt="logo" />
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default Dashboard;