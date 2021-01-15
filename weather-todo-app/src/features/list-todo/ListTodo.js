import React from "react";
import { useSelector } from "react-redux";
// import { selectStatus } from './service-availability-slice.js';
// import DisplayStatus from './DisplayStatus.js';

// import styles from './ServiceAvailability.module.css';

export default function TodoList() {
  const status = useSelector(selectStatus);
  return (
    // <div className={styles.container}><DisplayStatus status={status} /></div>
    <div>todo list goes here</div>
  );
}
