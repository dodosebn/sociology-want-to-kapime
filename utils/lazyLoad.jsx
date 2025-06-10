import React, {lazy} from 'react'

const LazyLoad = (path, namExp) => {
  return lazy (()=> {
    const promise = import (path) if(namExp === null){
        return promise
    }else{
        return promise.then(module => ({default: module[namExp]}))
    }
  }
    
  )
}

export default LazyLoad;
