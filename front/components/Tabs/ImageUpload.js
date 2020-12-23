import React from 'react';
import ImageUploading from "react-images-uploading";
import useAnnonces from 'service/hooks/useAnnonces';
import {Field, Form} from 'react-final-form';

export function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const [isUpload, setIsUpload] = React.useState(false);
  const maxNumber = 10;
  //const acceptType = ['jpg', 'gif', 'png'];
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setIsUpload(true);
  };

    const ImgUploadAdapter = ({ input, ...rest }) => (
        <ImageUploading
            {...input}
            {...rest}
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        >
            {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                  errors
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                    <button
                        className="upload bg-orange-500 text-white px-4 py-2 rounded shadow mr-1 mt-2"
                        onClick={onImageUpload}
                        {...dragProps}
                    >
                        Telecharger ici
                    </button>
                    &nbsp;
                    {imageList.length > 0 ? (
                        <button className="upload bg-gray-600 text-white px-4 py-2 rounded shadow mr-1 mt-2" onClick={onImageRemoveAll}>Supprimer toutes</button> ) :( null
                    )}
                    <div className="ImagelistPart flex flex-wrap mt-2">
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item w-full px-3 flex-1">
                                <img src={image["data_url"]} />
                                <div className="image-item__btn-wrapper">
                                    <button className="upload text-2xl text-gray-600 mr-1 mt-2" onClick={() => onImageUpdate(index)}><i class="fas fa-pen-square"></i></button>
                                    <button className="uploadRemove text-2xl text-gray-600 mr-1 mt-2" onClick={() => onImageRemove(index)}><i class="fas fa-window-close"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </ImageUploading>
    )

  const {
      addPhoto
    } = useAnnonces();

  const onSubmit = async (value) => {
      try {
          let {
              ...payload
          } = value;

          const data = {...payload};
          //await addPhoto(data);
          console.log("photo_data", data);
      } catch (err) {
          console.log(err);
          alert('Impossible de créer annonce, merci de constacter notre equipe');
      }
  }
  return (
    <div className="blockUploadImage">
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, value}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="uploads"
                            type="file"
                            value={images}
                            component={ImgUploadAdapter}
                        />
                    </div>
                    {isUpload ? (
                        <button
                            className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            disabled={submitting}

                        >
                            <i className="fas fa-paper-plane text-base mr-1 animate-bounce"></i> ENVOYER
                        </button> ) : (null)
                    }
                </form>
            )}
        />
    </div>
  );
}

export default ImageUpload;
