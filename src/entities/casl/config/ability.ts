import { defineAbility } from "@casl/ability";
import { createContext } from "react";
import { createContextualCan } from "@casl/react";

export const ability = defineAbility((_, cannot) => {
  cannot("manage", "all");
});

export const AbilityContext = createContext(ability);
export const Can = createContextualCan(AbilityContext.Consumer);
