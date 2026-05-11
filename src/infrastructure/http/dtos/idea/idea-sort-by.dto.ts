import { SortByOptions } from '../sort-by-options.dto';

type IdeaSortableProps = 'date' | 'supports';

export type IdeaSortByDto = SortByOptions<IdeaSortableProps>;
