// ServicesList.tsx
import React, { useState } from 'react';
import { Container, ServiceItem, EmptyListMessage, Filter, Main } from './styles';
import { allServices } from '../../utils/mocks/mockServices';
import { Select } from '../../components/Select';
import { Sidebar } from '../../components/Sidebar';
import { Modal } from '../../components/Modal'; 

export interface Service {
  id: number;
  name: string;
  title: string;
  description: string;
  type: string;
  telefone: string;
}

export const ServicesList: React.FC = () => {
  const [selectedServiceType, setSelectedServiceType] = useState('todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceInfo, setSelectedServiceInfo] = useState<Service | null>(null);

  const filteredServices = allServices.filter((service) =>
    selectedServiceType === 'todos' || service.type === selectedServiceType
  );

  const serviceOptions = ['Todos', 'Predial', 'Automotivo'];

  const openModal = (service: Service) => {
    setSelectedServiceInfo(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Main>
      <Sidebar />
      <Container>
        <h2>Lista de Serviços</h2>

        <Filter>
          <Select
            label="Filtrar por tipo"
            options={serviceOptions}
            onChange={(e) => setSelectedServiceType(e.target.value.toLowerCase())}
          />
        </Filter>
        {filteredServices.length === 0 ? (
          <EmptyListMessage>Nenhum serviço disponível para o filtro selecionado.</EmptyListMessage>
        ) : (
          filteredServices.map((service) => (
            <ServiceItem key={service.id} onClick={() => openModal(service)}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceItem>
          ))
        )}
      </Container>
      
      <Modal isOpen={isModalOpen} onClose={closeModal} serviceInfo={selectedServiceInfo as Service} />

    </Main>
  );
};
