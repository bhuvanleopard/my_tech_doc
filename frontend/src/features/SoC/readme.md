# __SoC__
Seperation of Concern: dividing system into distinct sections to maintain single and well-defined responsiblity.

## __SoC Layers__
    
    src/
    |
    |--features/
        |
        |--feature-01/
        |   |
        |   |--ui/        :presentation components, css.
        |   |--domain/    :business logic, hooks, data transformers, state machines.
        |   |--infra/     :api calls, data mappers, network utilities, services.
        |   |--index.tsx  :fascade entry point.
        |
        |--feature-n/

    *these layer can be further divided for seperation*
    
### Interfaction flow: UI-> domain-> infra 
*data flows opposition direction*.

UI trigger send signal to domain, further on the domain triggers infra and the data propogates back up to the UI.
