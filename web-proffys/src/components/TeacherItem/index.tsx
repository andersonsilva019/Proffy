import React from 'react';
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import { api } from '../../services/api';

interface ITeacherItemProps {
  id: number;
  name: string;
  whatsapp?: number;
  subject: string;
  avatar: string;
  bio: string;
  cost: number;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ id, name, whatsapp, subject, avatar, bio, cost }) => {

  function createNewConnection() {
    api.post('/connections', {
      user_id: id,
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt="Anderson Silva" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>

      <footer>
        <p>
          Preço por Hor
        <strong>R$ {cost},00</strong>
        </p>
        <a target="_black" onClick={createNewConnection} href={`https://wa.me/${whatsapp}`}>
          <img src={WhatsAppIcon} alt="whatsapp" />
        Entrar em contat
      </a>
      </footer>
    </article>
  );
}

export default TeacherItem;