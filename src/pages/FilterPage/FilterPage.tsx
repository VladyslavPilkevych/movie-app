import React from 'react';
import TitleComponent from '../../components/TitleComponent';
import {
  CustomChipsBox,
  CustomFormControl,
  FilterMenuSection,
  FilteredItemsSection,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './FilterPage.style';
import { BASE_URL_IMG, IMovieApiData, api } from '../../api';
import { IBaseCardData } from '../../types/types';
import { convertMovieToCardItemProps } from '../../utils/funstions';
import { Settings } from 'react-slick';
import SliderComponent from '../../components/SliderComponent';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Checkbox,
  Chip,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type Category = 'movie' | 'tvSeries' | 'tvShow';

const categories: { label: string; value: Category }[] = [
  { label: 'Movie', value: 'movie' },
  { label: 'TV Series', value: 'tvSeries' },
  { label: 'TV Show', value: 'tvShow' },
];

const FilterPage: React.FC = () => {
  const [filteredArray, setFilteredArray] = React.useState<IBaseCardData[]>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const filmsList = await api.getFilmsList();

        const filteredFilmList = await Promise.all(
          filmsList.map((movie: IMovieApiData) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = `${BASE_URL_IMG}original${movie?.poster_path}`;

              img.onload = function () {
                console.log('Image loaded successfully');
                resolve(movie);
              };
              img.onerror = function () {
                console.log('Image failed to load');
                resolve(null);
              };
            });
          })
        );
        const filteredMovies = filteredFilmList.filter(
          (movie) => movie !== null
        );
        setFilteredArray(convertMovieToCardItemProps(filteredMovies));
      } catch (error) {
        console.error('Error fetching films: ', error);
      }
    };
    fetchMovies();
  }, []); // todo: remove

  const sliderSettings: Settings = React.useMemo(
    () =>
      filteredArray?.length > 0
        ? {
            slidesPerRow: Math.ceil(filteredArray?.length / 5),
          }
        : {},
    [filteredArray]
  );

  const [selectedCategories, setSelectedCategories] = React.useState<
    Category[]
  >([]);

  const handleSelectChange = (event: SelectChangeEvent<Category[]>) => {
    const value = event.target.value as Category[];
    setSelectedCategories(value);
  };

  const handleDelete = (categoryToDelete: Category) => () => {
    setSelectedCategories((categories) =>
      categories.filter((category) => category !== categoryToDelete)
    );
  };
  return (
    <>
      <TitleComponent style={{ fontSize: '36px' }}>{'Filter'}</TitleComponent>
      <FilterMenuSection>
        <Box sx={{ width: 300 }}>
          <CustomFormControl fullWidth>
            <InputLabel id="category-select-label" shrink={false}>
              {'Categories'}
            </InputLabel>
            <Select
              labelId="category-select-label"
              multiple={true}
              value={selectedCategories}
              onChange={handleSelectChange}
              renderValue={() => <></>}
            >
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  <Checkbox
                    checked={selectedCategories.indexOf(category.value) > -1}
                  />
                  <ListItemText primary={category.label} />
                </MenuItem>
              ))}
            </Select>
            <CustomChipsBox>
              {selectedCategories.map((value) => (
                <Chip
                  key={value}
                  label={categories.find((cat) => cat.value === value)?.label}
                  onDelete={handleDelete(value)}
                  sx={{
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                      border: '1px solid rgba(256, 256, 256, 1)',
                    },
                    color: 'rgba(255, 255, 255, 0.8)',
                    '& .MuiChip-deleteIcon': {
                      color: 'rgba(255, 255, 255, 0.8)',
                      '&:hover': {
                        color: 'rgba(256, 256, 256, 1)',
                      },
                      '&:active': {
                        color: 'rgba(256, 256, 256, 0.4)',
                      },
                    },
                  }}
                />
              ))}
            </CustomChipsBox>
          </CustomFormControl>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </FilterMenuSection>
      <FilteredItemsSection>
        {filteredArray && (
          <>
            <SliderComponent
              sliderItemsArray={filteredArray}
              sliderSettings={sliderSettings}
            />
          </>
        )}
      </FilteredItemsSection>
    </>
  );
};

export default React.memo(FilterPage);
