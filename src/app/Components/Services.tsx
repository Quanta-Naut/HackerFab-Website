import useIsMobile from '@/Hooks/resizeHooks';
import React, { useState } from 'react';
import ServicesWrappers from './Wrappers/ServicesWrappers';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Arrow from '../../../public/arrow.png';
import tokyo from '../../../public/tokyo.png';
import tokyo2 from '../../../public/tokyo2.png';
import tokyo3 from '../../../public/tokyo3.png';
import tokoyoemail from '../../../public/tokyoemail.png';
import tokyo4 from '../../../public/tokyo4.png';
import tokyo5 from '../../../public/tokyo5.png';

const Modal = ({ isOpen, onClose, children, backgroundColor }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white p-6 rounded-lg w-4/5 h-4/5"
            style={{ backgroundColor }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            layout
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Services() {
  const isMobile = useIsMobile();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const closeModal = () => {
    setExpandedCard(null);
  };

  const services = [
    { title1: 'Pay-per-click', title2: 'advertising', img: tokyo2, bg: '#B4A8D8' },
    { title1: 'Search engine', title2: 'Optimization', img: tokyo, bg: '#B4A8D8' },
    { title1: 'Social Media', title2: 'Marketing', img: tokyo3, bg: '#191A23' },
    { title1: 'Email', title2: 'Marketing', img: tokoyoemail, bg: '#F3F3F3' },
    { title1: 'Content', title2: 'Creation', img: tokyo4, bg: '#B4A8D8' },
    { title1: 'Analytics and', title2: 'Tracking', img: tokyo5, bg: '#191A23' }
  ];

  return (
    <div className='w-full'>
      <div style={{ height: 'auto' }} className='w-full flex flex-col justify-between lg:flex-row lg:justify-start items-center'>
        <div
          className='flex items-center justify-center'
          style={{
            backgroundColor: '#B4A8D8',
            height: isMobile ? 46 : 'auto',
            width: isMobile ? 161 : 178,
            textAlign: 'center',
            borderRadius: 7
          }}
        >
          <h1 style={{ fontSize: isMobile ? 36 : 40 }}>Services</h1>
        </div>
        <p style={{ fontSize: isMobile ? 16 : 18, marginTop: isMobile ? 30 : 0 }} className='text-center lg:text-start lg:ml-4 lg:w-1/2'>
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className='w-full lg:grid grid-cols-2 gap-5 lg:mt-4'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            layout
          >
            <ServicesWrappers background={service.bg} onClick={() => toggleCard(index)}>
              <motion.div layout>
                <motion.div layout>
                  <div className='flex justify-center items-center w-full' style={{ width: 190, height: 33, borderRadius: 7, backgroundColor: '#fff' }}>
                    <motion.h3 style={{ fontSize: 26 }} layout>{service.title1}</motion.h3>
                  </div>
                  <div className='flex justify-center items-center' style={{ width: 172, height: 33, borderRadius: 7, backgroundColor: '#fff' }}>
                    <motion.h3 style={{ fontSize: 26 }} layout>{service.title2}</motion.h3>
                  </div>
                </motion.div>
                <motion.div className='flex flex-row justify-between items-end' style={{ marginTop: 27 }} layout>
                  <div style={{ marginRight: 50 }}>
                    <Image
                      src={Arrow}
                      alt="logo"
                      unoptimized
                    />
                  </div>
                  <div>
                    <Image
                      src={service.img}
                      alt="logo"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </motion.div>
            </ServicesWrappers>
          </motion.div>
        ))}
      </div>
      <Modal isOpen={expandedCard !== null} onClose={closeModal} backgroundColor={expandedCard !== null ? services[expandedCard].bg : '#fff'}>
        {expandedCard !== null && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            layout
          >
            <motion.h2 className="text-2xl font-bold mb-4" layout>{services[expandedCard].title1} {services[expandedCard].title2}</motion.h2>
            <motion.p layout>Additional content for {services[expandedCard].title1} {services[expandedCard].title2}</motion.p>
            <Image
              src={services[expandedCard].img}
              alt="3D model"
              unoptimized
            />
          </motion.div>
        )}
      </Modal>
    </div>
  );
}