import React, {useEffect} from 'react';
import ImageUploading from "react-images-uploading";
import useAnnonces from '../../service/hooks/useAnnonces';
import {Field, Form} from 'react-final-form';
import {connect} from 'react-redux';
import {dataURLtoBlob} from "../../helpers/Utils";
import Link from "next/link";
import {useRouter} from "next/router";

const ImageUpload = ({
                         dispatch,
                         loading,
                         car,
                         hasErrors
                     }) => {
    const [images, setImages] = React.useState([]);
    const {
        addPhoto,
        removePhoto
    } = useAnnonces();;
    const router = useRouter();
    const Ispremium = car?.premium
    let maxNumber = Ispremium == true ? 10 : 3;

    useEffect(() => {
        let imageList = car?.uploads.map(upload => {
            let image = {};
            image.id = upload.id;
            image.data_url = process.env.NEXT_PUBLIC_API_URL + upload.url;
            return image;
        });

        setImages(imageList);
    }, [dispatch])

    const ImgUploadAdapter = ({input, values, ...rest}) => (
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
                  dragProps
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
                        <button className="upload bg-gray-600 text-white px-4 py-2 rounded shadow mr-1 mt-2"
                                onClick={onImageRemoveAll}>Supprimer toutes</button>
                    ) : (null
                    )}
                    <div className="ImagelistPart flex flex-wrap mt-2">
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item w-full px-3 flex-1">
                                <img src={image["data_url"]}/>
                                <div className="image-item__btn-wrapper">
                                    <button className="upload text-2xl text-gray-600 mr-1 mt-2"
                                            onClick={() => onImageUpdate(index)}><i class="fas fa-pen-square"></i>
                                    </button>
                                    <button className="uploadRemove text-2xl text-gray-600 mr-1 mt-2"
                                            onClick={() => onImageRemove(index)}><i class="fas fa-window-close"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    { imageList.length > maxNumber ? (
                        <p className="text-center text-lg mt-4 text-orange-500"><i
                            className="fas fa-exclamation-triangle animate-bounce"></i> Telecharger {maxNumber} photos MAX</p>
                    ):(
                        null
                    )}

                </div>
            )}
        </ImageUploading>
    )

    const onChange = async (imageList, addUpdateIndex) => {
        // check for images to removed
        if(car?.length > 0){
            let currentImagesIds = imageList.map(i => i.id);
            let imagesRemoved = images.filter(img => !currentImagesIds.includes(img.id));
            if(imagesRemoved.length > 0){
                imagesRemoved.forEach(img => {
                    let { id } = img;
                    try {
                        const response = removePhoto(car?.id, {id});
                    } catch (err) {
                        console.log('Impossible supprimer photos', err);
                    }
                });
            }
        }

        // Handle new images
        if (addUpdateIndex !== undefined) {
            const image = imageList[addUpdateIndex];
            const formData = new FormData();
            formData.append("id", car?.id);
            formData.append("uploads[]", dataURLtoBlob(image.data_url), image.file.name);

            try {
                const response = await addPhoto(car?.id, formData);
                image.id = response[0].id;
            } catch (err) {
                console.log('Impossible ajouter photos', err);
            }
        }

        setImages(imageList);
    };

    const onSubmit = async (values) => {

    }
    return (
        <div className="blockUploadImage">
            <Form onSubmit={onSubmit}
                  initialValues={{
                      uploads: [],
                  }}
                  render={({handleSubmit, form, submitting, values}) => (
                      <form onSubmit={handleSubmit}>
                          <div>
                              <Field
                                  name="uploads"
                                  type="file"
                                  value={values.uploads}
                                  component={ImgUploadAdapter}
                              />
                          </div>
                          {images?.length > 0 && router.pathname === '/vendre' ? (
                              <Link href={car?.id ? (`/annonce?id=${car?.id}`) : ("#")} {...car}>
                                  <button
                                      className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="submit"
                                      disabled={submitting}
                                  >
                                      <i className="fas fa-paper-plane text-base mr-1 animate-bounce"></i> Envoyer et Voir votre Annonce
                                  </button>
                              </Link>
                          ) : (null)
                          }
                      </form>
                  )}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    loading: state.carsReducer.loading,
    car: state.carsReducer.selectedCar,
    hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(ImageUpload)
