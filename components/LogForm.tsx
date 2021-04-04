import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export interface LogFormProps {}

// Define Log items
type Log = {
  coffeeName: string;
  dateOfEntry: string;
  rating: number;
  brewMethod: string;
  bagImage?: File;
  roastDate?: string;
  description: string;
};

const LogForm: React.FC<LogFormProps> = () => {
  //Create form
  const { register, handleSubmit, watch, errors } = useForm({});

  //Create Coffee Log State
  const [coffeeLog, setCoffeeLog] = useState<Array<Log>>([]);

  //Handle Form Submition
  const onSubmit = (data) => {
    setCoffeeLog([
      ...coffeeLog,
      {
        coffeeName: data.coffeeName,
        dateOfEntry: Date(),
        rating: data.rating,
        brewMethod: data.brewMethod,
        description: data.description,
        bagImage: data.bagImage,
        roastDate: data.roastDate,
      },
    ]);
  };

  useEffect(() => console.log(coffeeLog), [coffeeLog]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Coffee Name
        <input
          type="text"
          name="coffeeName"
          ref={register({ required: true })}
        />
      </label>
      <label>
        Bag Image
        <input type="file" name="bagImage" ref={register} />
      </label>
      <label>
        Roast Date
        <input type="date" name="roastDate" ref={register} />
      </label>
      <label>
        Rating
        <input
          type="range"
          name="rating"
          min="0"
          max="5"
          ref={register({ required: true })}
        />
      </label>
      <label>
        Brew Method
        <select name="brewMethod" ref={register({ required: true })}>
          <option value="pourOver">Pour Over</option>
          <option value="harioV">Hario V60</option>
          <option value="chemex">Chemex</option>
          <option value="dripMachine">Drip Machine</option>
          <option value="frenchPress">French Press</option>
          <option value="aeropress">AeroPress</option>
          <option value="siphon">Siphon</option>
          <option value="coldBrew">Cold Brew</option>
          <option value="mokaPot">Moka Pot</option>
          <option value="espresso">Espresso</option>
          <option value="ristretto">Ristretto</option>
          <option value="brewPipe">Brew Pipe</option>
        </select>
      </label>
      <label>
        Description
        <input
          type="textarea"
          name="description"
          ref={register({ required: true })}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default LogForm;
