import styles from "./css/Solution.module.css";
import Icon from "./img/Icon.svg";
import Image from "next/image";

const context = [
  {
    title: "Machine Learning Anomaly Detections",
    text: "Lorem ipsum dolor sit amet consectetur. Diam id aliquet pulvinar ullamcorper nisi feugiat eu hendrerit vitae. Magna non id amet ultrices lobortis morbi vitae enim. Et mi feugiat in aliquam ullamcorper ac.",
  },
  {
    title: "Machine Learning Anomaly Detections",
    text: "Lorem ipsum dolor sit amet consectetur. Diam id aliquet pulvinar ullamcorper nisi feugiat eu hendrerit vitae. Magna non id amet ultrices lobortis morbi vitae enim. Et mi feugiat in aliquam ullamcorper ac.",
  },
  {
    title: "Machine Learning Anomaly Detections",
    text: "Lorem ipsum dolor sit amet consectetur. Diam id aliquet pulvinar ullamcorper nisi feugiat eu hendrerit vitae. Magna non id amet ultrices lobortis morbi vitae enim. Et mi feugiat in aliquam ullamcorper ac.",
  },
  {
    title: "Machine Learning Anomaly Detections",
    text: "Lorem ipsum dolor sit amet consectetur. Diam id aliquet pulvinar ullamcorper nisi feugiat eu hendrerit vitae. Magna non id amet ultrices lobortis morbi vitae enim. Et mi feugiat in aliquam ullamcorper ac.",
  },
  {
    title: "Machine Learning Anomaly Detections",
    text: "Lorem ipsum dolor sit amet consectetur. Diam id aliquet pulvinar ullamcorper nisi feugiat eu hendrerit vitae. Magna non id amet ultrices lobortis morbi vitae enim. Et mi feugiat in aliquam ullamcorper ac.",
  },
  {
    title: "Machine Learning Anomaly Detections",
    text: "Lorem ipsum dolor sit amet consectetur. Diam id aliquet pulvinar ullamcorper nisi feugiat eu hendrerit vitae. Magna non id amet ultrices lobortis morbi vitae enim. Et mi feugiat in aliquam ullamcorper ac.",
  },
];

function Solution() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h6>Our solution questions</h6>
        <div className={styles.title}>
          <h2>Unlocking Clarity</h2>
        </div>
        <p>
          Addressing Your Queries About Our Comprehensive Cybersecurity Solution
        </p>
      </div>
      <div className={styles.Contents}>
        {context.map((item, index) => (
          <div key={index} className={styles.Content}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.more}>
        <h3>
          Got more questions? Contact Us{" "}
          <Image src={Icon} width={10} height={10} alt="" />
        </h3>
      </div>
    </div>
  );
}

export default Solution;
