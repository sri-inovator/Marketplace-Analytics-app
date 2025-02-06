import showNotify from '../utils/showNotify';

const openModal = async (client, modal_type, title, template, data) => {
  try {
    await client.interface.trigger(modal_type, {
      title: title,
      template: template,
      data: data,
    });
  } catch (error) {
    await showNotify(client, 'danger', 'error in opening modal');
  }
};

export default openModal;