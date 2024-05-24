import Title from '../Title/Title';
import { tours } from '../../data';
import Tour from '../Tour/Tour';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="our" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, img, date, title, text, country, days, price } = tour;

          return (
            <Tour
              key={id}
              image={img}
              date={date}
              title={title}
              info={text}
              location={country}
              duration={days}
              cost={price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
