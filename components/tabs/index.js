
import {useState} from 'react'
import TabItem from './TabItem'
import TabContent from './TabContent'
import styles from './style.module.scss'




function Tabs() {

    const [activeTab, setActiveTab] = useState("tab1")
    const tabData = [
      {
        title: "Furnitures",
        id: "tab1",
        component: <div>Tab1</div>,
      },
      {
        title: "Clothing",
        id: "tab2",
        component: <div>Tab2</div>,
      },
      {
        title: "Jewellery",
        id: "tab3",
        component: <div>Tab3</div>,
      },
    
    ];



  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer__tabs}>
        <ul>

        
        {tabData.map((tab, index) => (
          <li tabIndex = {index}
           key={index}>

          <TabItem
            title={tab.title}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            id={tab.id}
            key={index}
          />
           </li>
        ))}
        </ul>
      </div>

      <div className={styles.mainContainer__tabContentContainer}>
        {tabData.map((tab, index) => (
          <TabContent
            component={tab.component}
            activeTab={activeTab}
            id={tab.id}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Tabs