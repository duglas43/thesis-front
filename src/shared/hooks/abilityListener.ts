import { useEffect, useContext } from "react";
import { AbilityContext } from "@src/entities/casl";
import { useUsersControllerFindMeAbilityRulesQuery } from "@entities/users";

export const useAbilityListener = () => {
  const ability = useContext(AbilityContext);
  const { data: abilityRules } = useUsersControllerFindMeAbilityRulesQuery();
  useEffect(() => {
    if (abilityRules) {
      ability.update(abilityRules);
    }
  }, [ability, abilityRules]);
};
