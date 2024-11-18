import "./FeatureForm.css";
import { useForm } from 'react-hook-form';

const FeatureForm = ({ feature, onSubmit, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmitForm = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    if (data.icon[0]) {
      formData.append('icon', data.icon[0]);
    }
    onSubmit(formData);
    reset();
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <h2 className="title">
          {feature ? 'Editar Característica' : 'Nueva Característica'}
        </h2>
        
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="formGroup">
            <label className="label">Nombre</label>
            <input
              type="text"
              className={`input ${errors.name ? 'error' : ''}`}
              {...register('name', {
                required: 'El nombre es requerido',
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener al menos 3 caracteres'
                }
              })}
            />
            {errors.name && (
              <span className="errorMessage">{errors.name.message}</span>
            )}
          </div>

          <div className="formGroup">
            <label className="label">Icono (Archivo)</label>
            <input
              type="file"
              accept="image/*"
              className={`input ${errors.icon ? 'error' : ''}`}
              {...register('icon', {
                required: 'El icono es requerido'
              })}
            />
            {errors.icon && (
              <span className="errorMessage">{errors.icon.message}</span>
            )}
          </div>

          <div className="buttonGroup">
            <button 
              type="submit" 
              className={`button submitButton`}
            >
              {feature ? 'Actualizar' : 'Crear'}
            </button>
            <button 
              type="button" 
              onClick={onClose}
              className={`button cancelButton`}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeatureForm;