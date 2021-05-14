# Contributing

Contributions to this extension are welcome and will be included in future releases of the official extensions!

To start, please fork this repository.  PRs should be done into the `development` branch.  Pulls to `master` will only be done by the repo owner, from the `development` branch.  

## Adding new Amazon TLDs

Primarily, updates will most likely be to new Amazon sites.  By design, this extension does *not* redirect all Amazon sites around the world, due to lack of knowledge on the owner's part if it is certain that Amazon Smile is available in all regions for Amazon.  (And, certainty about the exact URLs that are used in these situations)

Two things are needed when adding a new amazon [TLD](https://en.wikipedia.org/wiki/Top-level_domain):

- Add the [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) to the "urls" property within the redirection function in `smile.js`.  Each URL should be on it's own line.
- The same FQDN should be added to `manifest.json`.

## Testing

Prior to submitting your PR, you should test this within your own browser(s) to verify that your change works as intended.  After making a change, it is suggested that you: 

- Make the appropriate change in your fork and commit to GitHub.
- Utilize the Github Actions within your fork to build the extension.  (Depending on how your branch is named, you may need to run it manually using the workflow trigger)
- Download the generated artifact, or notice any failures to build.  
- Sideload the unpacked extension in the newly created /export folder to the browser, or if needed the zipped files.
- Verify that going to the new URL redirects to Amazon Smile as intended.
- Verify that the other URLs are not impacted and also redirect as intended.

Once your manual testing passes, proceed to PR to the `development` branch of this repository.
