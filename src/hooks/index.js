import { useEffect, useState } from "react";
import { firebase } from "../firebase";
import { collatedTaskExist } from "../helpers";
import moment from "moment";

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "gOvyG4SNjz");

    unsubscribe =
      selectedProject && !collatedTaskExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task=>9{
                
            })
        })
  }, [selectedProject]);
};
