import type { Category, Condition } from './types';

declare function getConditionsForCategory(
    category: Category,
    moduleSystem?: 'import' | 'require'
): (
    | ['default']
    | ['import', 'node', 'default']
    | ['node', 'require', 'default']
    | ['import', 'node', 'require', 'default']
    | null
);

export = getConditionsForCategory;