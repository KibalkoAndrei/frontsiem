import React, { useState } from "react";

const Servers = () => {

    const [data, setData] = useState(null)
    const [name, setName] = useState(null)
    const [listTime, setlistTime] = useState([])
  
    useEffect(() => {
      fetch('/api1')
      .then(response => response.json())
      .then(response => setData(response.pingTime))
      // .then(response => setName(response.hrefName))
    }, [])
  
    useEffect(() => {
      fetch('/api1')
      .then(response => response.json())
      // .then(response => setData(response.pingTime))
      .then(response => setName(response.hrefName))
    }, [])

    ////////

    useEffect(() => {
        if (refCount.current !== null) return
        if (boolItem) {
          refCount.current = window.setInterval(() => {
            setlistTime(listTime => [...listTime, getRandomIntInclusive(40, 60)])
            setListIp(listIp => [...listIp, title])
            setlistId(listId => [...listId, 0 + listId.length])
          }, 1000);
        };
        if (!boolItem) {
          if (refCount.current) {
            window.clearInterval(refCount.current)
            refCount.current = null
            setButton('START')
          }
        }
        return () => {
          if (refCount.current !== null) {
            window.clearInterval(refCount.current);
            refCount.current=null
            setButton('START')
          }
        };
      }, [boolItem])
    return (
      <div>
        <h1></h1>
      </div>
    );
}

export default Servers;