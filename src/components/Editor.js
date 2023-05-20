import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import ImportWord from '@ckeditor/ckeditor5-import-word/src/importword';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import { DocumentList, DocumentListProperties } from '@ckeditor/ckeditor5-list';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Bold,
  Italic,
  Paragraph,
  ImportWord,
  CloudServices,
  EssentialsPlugin,
  AutoformatPlugin,
  BoldPlugin,
  ItalicPlugin,
  HeadingPlugin,
  LinkPlugin,
  ParagraphPlugin,
  DocumentList,
  DocumentListProperties,
  GeneralHtmlSupport,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'undo',
      'redo',
      'importWord',
    ],
  },
  importWord: {
    tokenUrl:
      'https://97308.cke-cs.com/token/dev/0e6d17ce0b94ea7fa69a9da4f722d0cfabdae8cc0bc13768ee9f97379800?limit=10',
    defaultStyles: true,
  },
  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true,
      },
    ],
  },
  cloudServices: {
    tokenUrl:
      'https://97308.cke-cs.com/token/dev/0e6d17ce0b94ea7fa69a9da4f722d0cfabdae8cc0bc13768ee9f97379800?limit=10',
  },
};
