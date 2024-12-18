import React, { useEffect } from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import {PHOTO_GET} from '../../api'
import Erro from '../Helper/Erro'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {

  const {data, erro, loading, request} = useFetch();

  useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options);
  },[photo, request])

  function handleOutsideClick(event){
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick} >
      {erro && <Erro error={erro}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data} /> }

    </div>
  )
}

export default FeedModal