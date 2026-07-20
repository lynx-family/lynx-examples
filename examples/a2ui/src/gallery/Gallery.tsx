import {
  A2UI,
  Button,
  Card,
  CheckBox,
  ChoicePicker,
  Column,
  createMessageStore,
  defineCatalog,
  Divider,
  Image,
  LineChart,
  List,
  RadioGroup,
  Row,
  Slider,
  Tabs,
  Text,
  TextField,
} from "@lynx-js/genui/a2ui";
import type { CatalogComponent, CatalogManifest, MessageStore, ServerToClientMessage } from "@lynx-js/genui/a2ui";
import { catalogManifests } from "@lynx-js/genui/a2ui/catalog";
import { useCallback, useEffect, useRef, useState } from "@lynx-js/react";

import generatedLoadingManifest from "../catalog/Loading/catalog.json";
import { Loading } from "../catalog/Loading/Loading.jsx";

import chartMessages from "../mock/chart.json";
import productMessages from "../mock/product.json";
import tripMessages from "../mock/trip.json";
import weatherMessages from "../mock/weather.json";

import "./Gallery.css";

const STREAM_DELAY_MS = 320;

const loadingManifest = generatedLoadingManifest as CatalogManifest;

const ALL_BUILTINS = defineCatalog([
  [Text as CatalogComponent, catalogManifests.Text],
  [Image as CatalogComponent, catalogManifests.Image],
  [Row as CatalogComponent, catalogManifests.Row],
  [Column as CatalogComponent, catalogManifests.Column],
  [Card as CatalogComponent, catalogManifests.Card],
  [Button as CatalogComponent, catalogManifests.Button],
  [Loading as CatalogComponent, loadingManifest],
  [ChoicePicker as CatalogComponent, catalogManifests.ChoicePicker],
  [CheckBox as CatalogComponent, catalogManifests.CheckBox],
  [RadioGroup as CatalogComponent, catalogManifests.RadioGroup],
  [Slider as CatalogComponent, catalogManifests.Slider],
  [Tabs as CatalogComponent, catalogManifests.Tabs],
  [TextField as CatalogComponent, catalogManifests.TextField],
  [List as CatalogComponent, catalogManifests.List],
  [Divider as CatalogComponent, catalogManifests.Divider],
  [LineChart as CatalogComponent, catalogManifests.LineChart],
]).components;

type Dataset = {
  name: string;
  messages: readonly ServerToClientMessage[];
};

const DATASETS: readonly Dataset[] = [
  { name: "Weather", messages: weatherMessages as readonly ServerToClientMessage[] },
  { name: "Product", messages: productMessages as readonly ServerToClientMessage[] },
  { name: "Chart", messages: chartMessages as readonly ServerToClientMessage[] },
  { name: "Trip", messages: tripMessages as readonly ServerToClientMessage[] },
];

type StreamProgress = {
  deliveredCount: number;
  totalCount: number;
  status: "streaming" | "done";
};

export function Gallery() {
  const [datasetIndex, setDatasetIndex] = useState(0);
  const [sessionId, setSessionId] = useState(0);
  const [progress, setProgress] = useState<StreamProgress>({
    deliveredCount: 0,
    totalCount: DATASETS[0].messages.length,
    status: "streaming",
  });
  const cancelledRef = useRef(false);
  const storeRef = useRef<MessageStore>(createMessageStore());

  useEffect(() => {
    cancelledRef.current = false;
    const store = createMessageStore();
    storeRef.current = store;
    const messages = DATASETS[datasetIndex].messages;
    let index = 0;
    const total = messages.length;

    setProgress({ deliveredCount: 0, totalCount: total, status: "streaming" });

    const tick = () => {
      if (cancelledRef.current) {
        return;
      }
      if (index >= total) {
        setProgress({ deliveredCount: total, totalCount: total, status: "done" });
        return;
      }
      store.push(messages[index]);
      index += 1;
      setProgress({ deliveredCount: index, totalCount: total, status: index >= total ? "done" : "streaming" });
      if (index < total) {
        setTimeout(tick, STREAM_DELAY_MS);
      }
    };

    tick();

    return () => {
      cancelledRef.current = true;
    };
  }, [datasetIndex, sessionId]);

  const switchTo = useCallback((index: number) => {
    cancelledRef.current = true;
    setDatasetIndex(index);
    setSessionId((v) => v + 1);
  }, []);

  const currentDataset = DATASETS[datasetIndex];
  const statusText = progress.status === "done"
    ? `${currentDataset.name}`
    : `${currentDataset.name} ${progress.deliveredCount}/${progress.totalCount}`;

  return (
    <view className="page luna-light">
      <view className="a2ui-root-container">
        <view className="tabs-row">
          {DATASETS.map((dataset, index) => (
            <view
              key={dataset.name}
              className={index === datasetIndex
                ? "tab-pill tab-pill--active"
                : "tab-pill"}
              bindtap={() => {
                switchTo(index);
              }}
            >
              <text className="tab-label">{dataset.name}</text>
            </view>
          ))}
        </view>

        <scroll-view scroll-y style={{ flex: 1, minHeight: "0" }}>
          <A2UI
            key={`${datasetIndex}-${sessionId}`}
            messageStore={storeRef.current}
            catalogs={ALL_BUILTINS}
            onAction={() => {}}
            wrapSurface={(children) => <view className="a2ui-light">{children}</view>}
            className="a2ui-container"
          />
        </scroll-view>

        <view className="bottom-bar">
          <view className={`status-dot status-dot--${progress.status}`} />
          <text className="bottom-bar-text">{statusText}</text>
          {progress.status === "streaming" && (
            <view className="progress-track">
              <view
                className="progress-fill"
                style={{ width: `${Math.round((progress.deliveredCount / progress.totalCount) * 100)}%` }}
              />
            </view>
          )}
        </view>
      </view>
    </view>
  );
}
