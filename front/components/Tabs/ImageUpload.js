import React from 'react';
import ImageUploading from "react-images-uploading";
import useAnnonces from 'service/hooks/useAnnonces';
import {Field, Form} from 'react-final-form';
import {connect} from 'react-redux';

const ImageUpload = ({
                         dispatch,
                         loading,
                         car,
                         hasErrors
                     }) => {
    const [images, setImages] = React.useState([]);
    const [isUpload, setIsUpload] = React.useState(false);
    const {
        addPhoto
    } = useAnnonces();
    const maxNumber = 10;
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

                </div>
            )}
        </ImageUploading>
    )

    const dataURLtoBlob = (dataurl) => {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime});
    }

    const onChange = async (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);

        //file =  new file();
        //const file = this.fileInput.files.push(file);

        if (imageList.length > 0) {
            const formData = new FormData();
            formData.append("uploads[]", dataURLtoBlob(imageList[0].data_url), "filename.png");

            try {
                await addPhoto(car?.id, formData);
            } catch (err) {
                console.log(err);
                alert('Impossible ajouter photos');
            }
        }
    };

    const onSubmit = async (values) => {
        try {
            let {
                ...payload
            } = values;

            console.log("car_id=", car?.id, values);

            const data = {...payload};
            await addPhoto(car?.id, data);
        } catch (err) {
            console.log(err);
            alert('Impossible ajouter photos');
        }
    }
    return (
        <div className="blockUploadImage">
            <Form
                initialValues={{
                    uploads: [],
                }}
                onSubmit={onSubmit}
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
                        {values.uploads.length > 0 ? (
                            <button
                                className="bg-orange-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-12 py-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                                disabled={submitting}
                            >
                                <i className="fas fa-paper-plane text-base mr-1 animate-bounce"></i> ENVOYER
                            </button>) : (null)
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

