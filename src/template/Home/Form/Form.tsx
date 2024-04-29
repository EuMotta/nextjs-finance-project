import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import axios from 'axios';

import { FormProps } from '../../../../@Types/global';

const Form = ({ fetch }: FormProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      data.operationType = data.operationType === 'true' ? true : false;

      data.value = Number(data.value);

      console.log('at', data);
      if (data.operationType === false) {
        data.value = -Math.abs(data.value);
      }
      console.log('et', data);
      const response = await axios.post('/api/cookies', data);

      if (response.status !== 200) {
        throw new Error('Erro ao enviar dados para a API');
      }

      toast.success('Transação adicionada!');
      fetch();
    } catch (error) {
      const err = error as Error;
      alert(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-5 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Nome:
        </label>
        <input
          {...register('name')}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="value"
        >
          Valor:
        </label>
        <input
          {...register('value')}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="value"
          type="number"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="operationType"
        >
          Tipo de Operação:
        </label>
        <select
          {...register('operationType')}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="operationType"
        >
          <option value="">Selecione...</option>
          <option value="true">Entrou</option>
          <option value="false">Saiu</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="date"
        >
          Data:
        </label>
        <input
          {...register('date')}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
