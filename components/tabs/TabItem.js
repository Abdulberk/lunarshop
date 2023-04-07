import React from 'react'
import styles from './style.module.scss'

function TabItem({title, activeTab, setActiveTab, id}) {


    const handleActiveTab = () => {

        setActiveTab(id)
    }




  return (
    <div>
        <div className = {activeTab === id ? styles.activeTab : styles.tab } onClick = {handleActiveTab}>
            

            {title}



            </div>





    </div>
  )
}

export default TabItem