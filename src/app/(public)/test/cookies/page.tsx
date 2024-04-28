'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Section from '@/components/Section';

import {
  cookiesGet,
  cookiesGetAll,
  cookiesHas,
  cookiesSet,
} from '@/utils/cookies';

interface FormData {
  name: string;
  value: string;
}

interface GetCookieData {
  cookieName: string;
}
interface Cookie {
  name?: string;
  value?: string;
  path?: string;
}
export default function Page() {
  const { register, handleSubmit } = useForm<FormData>();

  const [uniqueCookie, setUniqueCookie] = useState<Cookie | null>(null);

  const { register: registerGet, handleSubmit: handleSubmitGet } =
    useForm<GetCookieData>();

  const onSubmit = (data: FormData) => {
    cookiesSet({ data });
  };
  const onSubmitGet = async (data: GetCookieData) => {
    try {
      const cookieValue = await cookiesGet(data.cookieName);
      if (cookieValue) {
        setUniqueCookie(cookieValue);
        console.log(cookieValue);
      } else {
        console.log(`Cookie com o nome ${data.cookieName} não encontrado.`);
      }
    } catch (error) {
      console.error(`Erro ao obter o cookie: ${error}`);
    }
  };
  const onSubmitGetAll = async (data: GetCookieData) => {
    try {
      const cookieValue = await cookiesGetAll();
      if (cookieValue) {
        console.log(cookieValue);
      } else {
        console.log(`Cookie com o nome ${data.cookieName} não encontrado.`);
      }
    } catch (error) {
      console.error(`Erro ao obter o cookie: ${error}`);
    }
  };
  const onSubmitHas = async (cookieName: string) => {
    try {
      const hasCookie = await cookiesHas(cookieName);
      if (hasCookie) {
        console.log(`Cookie com o nome ${cookieName} encontrado.`);
      } else {
        console.log(`Cookie com o nome ${cookieName} não encontrado.`);
      }
    } catch (error) {
      console.error(`Erro ao verificar o cookie: ${error}`);
    }
  };

  return (
    <Section className="flex justify-center items-center ">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
        <div className="card bg-primary/30 p-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <input
              {...register('name')}
              placeholder="Nome"
              className="input input-primary p-2 rounded border border-gray-300"
            />
            <input
              {...register('value')}
              placeholder="Valor"
              className="input input-primary p-2 rounded border border-gray-300"
            />
            <Button
              btn
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Enviar
            </Button>
          </form>
        </div>
        <div className="card bg-primary/30 p-5">
          <form
            onSubmit={handleSubmitGet(onSubmitGet)}
            className="flex flex-col gap-5"
          >
            <input
              {...registerGet('cookieName')}
              placeholder="Nome do Cookie"
              className="input input-primary p-2 rounded border border-gray-300"
            />
            <Button
              btn
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Obter Cookie
            </Button>
          </form>
          <div className="flex gap-5 mt-5">
            {uniqueCookie ? (
              <>
                <div className="font-bold">Nome: {uniqueCookie?.name}</div>
                <div className="font-bold">Valor: {uniqueCookie?.value}</div>
                <div className="font-bold">Path: {uniqueCookie?.path}</div>
              </>
            ) : (
              <div className="text-red-500">Não encontrado</div>
            )}
          </div>
        </div>
        <div className="card bg-primary/30 p-5">
          <form
            onSubmit={handleSubmitGet(onSubmitGetAll)}
            className="flex flex-col gap-5"
          >
            <Button
              btn
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Obter Cookie
            </Button>
          </form>
          <div className="flex gap-5 mt-5">Cookies no console</div>
        </div>
        <div className="card bg-primary/30 p-5">
          <form
            onSubmit={handleSubmitGet((data: GetCookieData) =>
              onSubmitHas(data.cookieName),
            )}
            className="flex flex-col gap-5"
          >
            <input
              {...registerGet('cookieName')}
              placeholder="Nome do Cookie"
              className="input input-primary p-2 rounded border border-gray-300"
            />
            <Button
              btn
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Verificar Cookie
            </Button>
          </form>

          <div className="flex gap-5 mt-5">Cookies no console</div>
        </div>
      </Container>
    </Section>
  );
}
