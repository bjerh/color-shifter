import { ComplimentaryLuminated } from "./complimentaryLuminatedColor";
import { Construct } from "./constructInterface";

export const getComplimentaryLuminatedColor = (
  color: string,
  variables: Construct
) => new ComplimentaryLuminated(variables).get(color);
