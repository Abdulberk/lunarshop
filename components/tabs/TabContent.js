import React from 'react'
import styles from './style.module.scss'
function TabContent({component, activeTab, id}) {

    if(activeTab !== id) return null




  return (
    <div>

        {
          activeTab === id ? 
          <div className = {styles.activeTabContent}>
            {component}
            </div> 

            : null

        }

      


    </div>
  )
}

export default TabContent