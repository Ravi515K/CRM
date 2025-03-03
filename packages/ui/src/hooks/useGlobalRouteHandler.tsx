import { urlUtility } from "@repo/utilities/url.utility.ts";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function useGlobalRoutesHandler() {
  // url queries
  const navigate = useNavigate();
  const route = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQueries = urlUtility.getUrlQueries(location.search);

  const navigateTo = ({
    remove = "",
    to,
    url,
    replace = false,
  }: {
    remove?: string | string[];
    to?: Record<string, string>;
    url?: string;
    replace?: boolean;
  }) => {
    if (Array.isArray(remove)) {
      remove.forEach((keyString) => {
        delete urlQueries[keyString];
      });
    } else {
      delete urlQueries[remove];
    }

    navigate(
      {
        ...(url && { pathname: url }),
        search: createSearchParams({
          ...urlQueries,
          ...to,
        }).toString(),
      },
      {
        replace,
      }
    );
  };

  // VARIABLES
  const activeRoutes = location.pathname?.split("/");
  const subRoute = activeRoutes[activeRoutes.length - 1];

  return {
    searchParams,
    setSearchParams,
    activeRoutes,
    subRoute,
    route,
    location,
    urlQueries,
    navigate,
    navigateTo,
  };
}
