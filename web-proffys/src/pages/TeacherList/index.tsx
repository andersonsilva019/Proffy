import React, { useState, FormEvent } from 'react';

import PagesHeader from '../../components/PagesHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/select';
import { api } from '../../services/api';

import './styles.css';

interface ITeacher {
  id: number;
  name: string;
  whatsapp?: number;
  subject: string;
  avatar: string;
  bio: string;
  cost: number;
}

const TeacherList: React.FC = () => {

  const [teachers, setTeachers] = useState<ITeacher[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get(`classes`, {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);

  }

  return (
    <div id="page-teacher-list" className="container">
      <PagesHeader title="Estes são os proffys disponíveis" >
        <form id="search-teachers" onSubmit={searchTeachers}>

          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matematica', label: 'Matematica' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabádo' },
            ]}
          />
          <Input
            label="Hora"
            name="time"
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>

        </form>
      </PagesHeader>

      <main>
        {teachers.map(teacher => (
          <TeacherItem
            key={teacher.whatsapp}
            id={teacher.id}
            name={teacher.name}
            avatar={teacher.avatar}
            bio={teacher.bio}
            cost={teacher.cost}
            subject={teacher.subject}
            whatsapp={teacher.whatsapp}
          />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;