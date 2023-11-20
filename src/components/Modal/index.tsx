// Modal.tsx
import React from 'react';
import { ModalContainer, ModalContent, CloseButton, ActionButton, Contact } from './styles';
import { Service } from '../../pages/ServicesList';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceInfo: Service;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, serviceInfo }) => {
  if (!isOpen) {
    return null;
  }

  const whatsappLink = `https://wa.me/${serviceInfo.telefone}`;
  const ligacaoLink = `tel:${serviceInfo.telefone}`;

  return (
    <ModalContainer>
      <ModalContent>
      <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{serviceInfo.name}</h2>
        <p><span>Serviço:</span> {serviceInfo.description}</p>
        <p><span>Tipo:</span> {serviceInfo.type}</p>
        
        <Contact>
          
          <ActionButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Chamar no WhatsApp
          </ActionButton>
          <ActionButton href={ligacaoLink}>
            Ligar
          </ActionButton>
        </Contact>
      </ModalContent>
    </ModalContainer>
  );
};
