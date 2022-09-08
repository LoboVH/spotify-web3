//import axios from 'axios';
import React from 'react';
import styles from '../styles/UploadModal.module.css';



const UploadModal = ({title, musicUrl, setTitle, artist, setArtist, setMusicUrl, setShowUploadMusic, newMusic}) => {
  //const [fileError, setFileError] = useState("");

 /* const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })

  const uploadClicked = async () => {
    var files = document.querySelector('#music-file');

    if (files.files.length == 0) return 
    const base64_file =  await toBase64(files.files[0]);

    axios
      .post(
        '/api/upload_music',
        { file: base64_file, fileName: files.files[0].name},
        {},
      )
      .then(res => {
        console.log(res.data);
        if (
          res.data.result &&
          res.data.result.created &&
          res.data.result.created[0].dataTxId
        )
          setMusicUrl(
            'https://arweave.net/' + res.data.result.created[0].dataTxId,
          )
      })
      .catch(err => {
        console.log(err)
      })
  } */

/*
  const onFileSelected = (e) => {
    const file = e.target.files[0];
    const fileSizeLimit = 15000000; //10 mb
    if (file && file.size > fileSizeLimit){
      setFileError(`${file.name}: File size too large `);
      console.log(fileError);
    } else {

      setFile(file);
      setFileError('')   

    }
  };

  
  const uploadFileToCloudinary = async () => {
    try {
    const data = new FormData();
    data.append('file', file);
    data.append('resource_type', 'raw');
    data.append('upload_preset', 'Laudible');
    data.append('cloud_name', 'scotticus');
    const respawnse = await axios.post('https://api.cloudinary.com/v1_1/scotticus/raw/upload', data);
    return respawnse.data.url
    } catch (err) {   
      console.error('Error uploading file', err);
      setSubmitting(false)
    }
  } */
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Upload New Music</div>

      <div className={styles.inputField}>
        <div className={styles.inputTitle}>Title</div>
        <div className={styles.inputContainer}>
          <input
          className={styles.input}
          type="text" 
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
      </div>
      </div>
      <div className={styles.inputField}>
        <div className={styles.inputTitle}>Artist</div>
        <div className={styles.inputContainer}>
          <input
          className={styles.input}
          type="text" 
          value={artist}
          onChange={e => setArtist(e.target.value)}
          />
      </div>
      </div>
      <div className={styles.inputField}>
        <div className={styles.inputTitle}>URL</div>
        <div className={styles.inputContainer}>
          <input
          className={styles.input}
          type="text" 
          value={musicUrl}
          onChange={e => setMusicUrl(e.target.value)}
          />
      </div>
      </div>


      <div className={styles.modalButtons}>
        <button
        onClick={() => setShowUploadMusic(false)}
        className={`${styles.button} ${styles.cancelButton}`}
        >
          Cancel
        </button>
        <button
        onClick={newMusic}
        className={`${styles.button} ${styles.createButton}`}
        >
          Create New
        </button>
      </div>


    </div>
  )
}

export default UploadModal;