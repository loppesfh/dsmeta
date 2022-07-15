import './styles.css';
import icon from '../../assets/img/notification-icon.svg';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

type Props = {
  saleId: number
}

const NotificationButton = ({saleId} : Props) => {

  const handleClick = (id: number) => {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
      .then(() => {
        toast.info("SMS enviado com Sucesso!")
        console.log("enviada!")
      })
  }
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;
