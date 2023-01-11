import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StyleDoc() {
    return (
        <>
            <DocSubSection id="style" label="Style">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>p-scrollpanel</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-scrollpanel-wrapper</td>
                                <td>Wrapper of content section.</td>
                            </tr>
                            <tr>
                                <td>p-scrollpanel-content</td>
                                <td>Content section.</td>
                            </tr>
                            <tr>
                                <td>p-scrollpanel-bar</td>
                                <td>Scrollbar handle.</td>
                            </tr>
                            <tr>
                                <td>p-scrollpanel-bar-x</td>
                                <td>Scrollbar handle of a horizontal bar.</td>
                            </tr>
                            <tr>
                                <td>p-scrollpanel-bar-y</td>
                                <td>Scrollbar handle of a vertical bar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
