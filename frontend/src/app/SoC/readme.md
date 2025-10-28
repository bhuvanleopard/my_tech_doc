#__SoC__
    Seperation of Concern: dividing system into distinct sections to maintain single and well-defined responsiblity.

##__SoC Layers__
    
    src/
    |
    |__features/
            |
            |__feature-01/
            |        |
            |        |__ui/        :presentation components, css.
            |        |__domain/    :business logic, hooks, data transformers, state machines.
            |        |__infra/     :api calls, data mappers, network utilities, services.
            |        |__index.ts   :fascade entry point.
            |
            |__feature-n/
    
*these layer can be divided further for for modular control*