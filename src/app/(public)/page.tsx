'use client';

import Container from '@/components/Container';
import Section from '@/components/Section';
import { useData } from '@/Hooks/useData';
import { Form, Transactions } from '@/template/Home';
import Results from '@/template/Home/Results/Results';

export default function Formulario() {
  const {
    fetchData,
    loading,
    error,
    data: transactions,
  } = useData({ url: '/api/cookiesget', reverse: true });

  return (
    <Container>
      <Section>
        <div className="grid justify-center items-center">
          <Form fetch={fetchData} />
          <Transactions
            fetch={fetchData}
            loading={loading}
            error={error}
            data={transactions}
          />
          <Results data={transactions} loading={loading} />
        </div>
      </Section>
    </Container>
  );
}
